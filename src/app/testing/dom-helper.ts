import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DOMHelper<T> {
  private fixture: ComponentFixture<T>;
  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  singleText(tagName: string): string | undefined {
    const el = this.fixture.debugElement.query(By.css(tagName));
    return el ? el.nativeElement.textContent : undefined;
  }

  querySelector(query: string): string | undefined {
    const el = this.fixture.nativeElement;
    return el ? el.querySelector(query).textContent : undefined;
  }

  count(tagName: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.length;
  }

  countText(tagName: string, text: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.filter(
      (element) => element.nativeElement.textContent === text
    ).length;
  }

  hasAttr(tagName: string, attrName: string): boolean {
    const el = this.fixture.debugElement.query(By.css(tagName));
    return el.nativeElement.hasAttribute(attrName);
  }

  hasAttrValue(tagName: string, attrName: string, value: string): boolean {
    const el = this.fixture.debugElement.query(By.css(tagName));
    if (!el.attributes[attrName]) {
      return false;
    }
    return el.attributes[attrName] === value;
  }

  hasPropValue(tagName: string, attrName: string, value: any): boolean {
    const el = this.fixture.debugElement.query(By.css(tagName));
    if (!el.properties[attrName]) {
      return false;
    }
    return el.properties[attrName] === value;
  }

  clickButton(buttonText: string): void {
    this.findAll('button').forEach((button) => {
      const buttonElement: HTMLButtonElement = button.nativeElement;
      if (buttonElement.textContent === buttonText) {
        buttonElement.click();
      }
    });
  }

  findAll(tagName: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(tagName));
  }
}
