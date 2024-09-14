import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'string-calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual('string-calculator');
  });

  it('should return 0 if inputString is empty', () => {
     const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.inputString = '';
    app.calculateSum();
    expect(app.result).toBe(0);
  });


  it('should return 6 if inputString is "1\n2,3"', () => {
    const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   app.inputString = "1\n2,3";
   app.calculateSum();
   expect(app.result).toBe(6);
 });


 it('should return -3 with error message if inputString is "//;\n1;2,-3"', () => {
  const fixture = TestBed.createComponent(AppComponent);
 const app = fixture.componentInstance;
 app.inputString = "//;\n1;2,-3";
 app.calculateSum();
 expect(app.result).toBe("Negative numbers not allowed -3");
});

it('Should return -2, -3 with error message if inputString is "//;\n-2,1;2,-3"',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  app.inputString = "//;\n-2,1;2,-3";
  app.calculateSum();
  expect(app.result).toBe("Negative numbers not allowed -2, -3");
})

});
