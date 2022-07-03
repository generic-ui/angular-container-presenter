import { Directive, inject, Type, ViewContainerRef } from '@angular/core';
import { createPresenter } from '../container-presenter';
import { UserPresenterComponent } from './user-presenter.component';
import { UserRepository } from './user.repository';



@Directive({
	selector: '[user-container]'
})
export class UserContainerDirective {

	private readonly presenter = createPresenter(UserPresenterComponent);

	constructor(private readonly repo: UserRepository) {

		this.presenter.users.connect(this.repo.onUsers())

		this.presenter.userChanged.subscribe(v => this.sendMessage());
	}

	sendMessage() {
	}
}
