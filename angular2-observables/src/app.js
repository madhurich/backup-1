import $ from 'jquery';
import Rx from 'rxjs/Rx';


/*var interval$ = Rx.Observable.interval(500)
							.merge(Rx.Observable.interval(1000))
							.take(9)
							.subscribe((x) => {
								console.log(x);
							});*/


var source1$ = Rx.Observable.range(1, 5);
var source2$ = Rx.Observable.range(10, 5);

Rx.Observable.concat(source1$, source2$)
				.subscribe((x) => {
					console.log(x);
				});						