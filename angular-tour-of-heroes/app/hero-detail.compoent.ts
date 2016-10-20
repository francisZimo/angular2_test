import{Component,Input} from '@angular/core';//先从angular中导入component和input装饰器
import {Hero} from "./hero"
@Component({ //使用@component装饰器创建元数据。在元数据中，我们指定选择器的名字，用以标记次组件的语速。然后导出这个组件类，以便其他组件可以使用它。
    selector:'my-hero-detail',
    template:`
        <div *ngIf="hero">
        <h2>{{hero.name}}details!</h2>
        <div><label>id:{{hero.id}}</label></div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name" type="text">
        </div>

    `
})


export  class heroDetailComponent{
    @Input()
    hero:Hero;
}