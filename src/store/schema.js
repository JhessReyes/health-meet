
//horarios de atencion

let schedules = {

    //un horario
    schedule: {
        days: {
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false,
        },
        start: '07:00',
        end: '12:00',
        interval: '30'
    },

    schedule: {
        days: {
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: false,
            sunday: false,
        },
        start: '14:00',
        end: '18:00',
        interval: '30'
    },
}


export class schedule {
    // @ts-ignore
    constructor({ name = "", days = {}, start = "", end = "", interval = "" } = {}) {
        this.name = name
        this.days = days
        this.start = start
        this.end = end
        this.interval = interval
    }
}