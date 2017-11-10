
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
	name: 'summary'
})

export class SummaryPipe implements PipeTransform{
	transform(value: string, args: string[]){
		console.log(args);
		var limit;
		if(value){
			limit = (args && args[0]) ? parseInt(args[0]) : 14;
		}
		return value.slice(0, limit) + '....';
	}
}