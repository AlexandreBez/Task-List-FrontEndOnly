import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "underline"
})
export class Underline implements PipeTransform{

    transform(value: any) {
        return value;
    }
}