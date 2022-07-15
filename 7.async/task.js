
class AlarmClock {
	constructor(alarmCollection, timerId) {
		this.alarmCollection = [];
		this.timerId = null;
	}

addClock(time, callback, id) {

	if (!id) {
		throw new Error('Параметр не передан!');
	}

	else if (this.alarmCollection.find(item => item.id === id)) {
		return console.error('Будильник уже существует.');
	}
	else {
		this.alarmCollection.push({time:time, id:id, callback:callback});
	}	
}

removeClock(id) {
	const deleteId = this.alarmCollection.filter((element) => element.id === id);
	if (deleteId) {
		this.alarmCollection.pop();
	}	 
		return  
		this.alarmCollection.length != this.alarmCollection.length;
	}
	
getCurrentFormattedTime() {
	let date = new Date();
	return (`${date.getHours()}:${date.getMinutes()}`);
}

start () {
	const checkClock = alarm => {
		if(this.alarmCollection.time === this.getCurrentFormattedTime()) {
			this.alarmCollection.callback();
		}
	}
		if (this.timerId === null) {
		this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock),1000);
	}
}
stop () {
	if (this.timerId != null) {
		clearInterval(this.timerId);
		this.timerId = null;
	}
}

printAlarms () {
	function printCall(element) {
		console.log('Будильник №' +`${element.id}:${element.time}`)
	}
	
	this.alarmCollection.forEach(printCall); 
	}	 
	
clearAlarms() {
	clearInterval(this.timerId);
	this.timerId = null;
	this.alarmCollection = [];
	}	
}
   let clock;
   clock = new AlarmClock();
  //необходимо создавать объект будильник
   console.log(clock);
  // необходимо создавать добавлять звонок
    console.log(clock.addClock("16:45", f => f, 1));
    console.log(clock.alarmCollection.length);
  //необходимо добавлять и удалять звонок
    console.log(clock.addClock("16:45", f => f, 1));
    console.log(clock.alarmCollection.length); //(1);
    console.log(clock.removeClock(1));
    console.log(clock.alarmCollection.length); //(0);
 //будильник должен возвращать время в формате HH:MM'/
   const currentDate = new Date();
   console.log(clock.getCurrentFormattedTime()); 
  //id интервала должно отсутствовать до запуска'//
   console.log(clock.timerId);
  //необходимо запускать будильник
    console.log(clock.addClock("16:45", f => f, 1));
    console.log(clock.start());
    console.log(clock.timerId);
   // console.log(clock.removeClock(1));
    console.log(clock.alarmCollection.length);
    console.log(clock.start());
    console.log(clock.timerId);
  //будильник должен создавать таймер, а затем его удалять
    console.log(clock.start());
    console.log(clock.timerId);
    console.log(clock.stop());
    console.log(clock.timerId);
  //Будильник должен создавать звонки, а затем очищать их все
    console.log(clock.addClock("16:45", f => f, 1));
    console.log(clock.addClock("16:45", f => f, 2));
    console.log(clock.addClock("16:45", f => f, 3));
    console.log(clock.alarmCollection.length);
    console.log(clock.clearAlarms());
    console.log(clock.alarmCollection.length);
   console.log(clock.printAlarms())
  