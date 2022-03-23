import { Observable } from 'rxjs';

const obs = new Observable((sub) => {
  for (let i = 0; i < 11; i++) {
    setTimeout(() => {
      sub.next(i*i);
    }, i * 1000);
  }
  
});

obs.subscribe({
  next(x) {
    console.log('got value ' + x);
  }
});