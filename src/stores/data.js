import { action, makeObservable, observable } from "mobx";

export default class Data {
  constructor() {
    makeObservable(this, {
      entities: observable,
      time: observable,
      smTime: observable,
      status: observable,
      setEntities: action,
      setTime: action,
      setSmTime: action,
      setStatus: action,
      deleteData: action,
    });
  }

  entities = [];
  time = 0;
  smTime = 0;
  status = "initial";

  setEntities(entities) {
    const currentEntities = this.entities;
    const newEntities = currentEntities.concat(entities);
    this.entities = newEntities;
  }

  setTime(time) {
    this.time = time;
  }

  setSmTime(smTime) {
    this.smTime = smTime;
  }

  setStatus(status) {
    this.status = status;
  }

  deleteData() {
    this.entities = [];
    this.time = 0;
    this.status = "initial";
  }
}

export const data = new Data();
