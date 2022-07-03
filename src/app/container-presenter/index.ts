import { ChangeDetectorRef, EventEmitter, inject, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

export function createPresenter<C>(component: Type<C>): C {

	const vcr = inject(ViewContainerRef);

	const compRef = vcr.createComponent(component);

	compRef.changeDetectorRef.detectChanges();

	return compRef.instance;
}

export type PresenterInput<T> = {
	set: (v: T) => void,
	value: () => T,
	connect: (obs: Observable<T>) => void
}

export function createInput<T>(): PresenterInput<T> {

	const cd = inject(ChangeDetectorRef);

	let value: T;

	return {
		set: (v: T) => {
			value = v;
			cd.detectChanges();
		},
		value: () => {
			return value;
		},
		connect: (obs: Observable<T>) => {
			obs.subscribe(v => {
				value = v;
				cd.detectChanges();
			})
		}
	}
}

export function createOutput<T>(): EventEmitter<T> {
	return new EventEmitter<T>();
}
