import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMediComponent } from './usuario-medi.component';

describe('UsuarioMediComponent', () => {
  let component: UsuarioMediComponent;
  let fixture: ComponentFixture<UsuarioMediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioMediComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioMediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
