import { Summoner } from './summoner';

export class Team {
    id: number;
    name: string;
    summoners: Summoner[] = new Array<Summoner>();
}
