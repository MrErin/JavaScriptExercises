const lunch_data = [
    {
        student_id: 101783,
        school_id: 2,
        first_name: 'Sam',
        last_name: 'Poli',
        scans: [
            new Date('2018-09-04 12:00'),
            new Date('2018-09-05 12:00'),
            new Date('2018-09-06 12:00'),
            new Date('2018-09-10 12:00'),
            new Date('2018-09-11 12:00'),
            new Date('2018-09-12 12:00'),
            new Date('2018-09-13 12:00'),
            new Date('2018-09-14 12:00'),
            new Date('2018-09-17 12:00'),
            new Date('2018-09-18 12:00'),
            new Date('2018-09-19 12:00'),
            new Date('2018-09-20 12:00'),
            new Date('2018-05-21 12:00'),
            new Date('2018-10-09 12:00'),
            new Date('2018-10-10 12:00'),
            new Date('2018-10-11 12:00'),
            new Date('2018-10-12 12:00'),
            new Date('2018-10-15 12:00'),
            new Date('2018-10-16 12:00'),
            new Date('2018-10-17 12:00'),
        ]
    },{
        student_id: 101786,
        school_id: 1,
        first_name: 'Sam',
        last_name: 'Poli',
        scans: [
            new Date('2018-09-04 12:00'),
            new Date('2018-09-05 12:00'),
            new Date('2018-09-06 12:00'),
            new Date('2018-09-10 12:00'),
            new Date('2018-09-11 12:00'),
            new Date('2018-09-12 12:00'),
            new Date('2018-09-13 12:00'),
            new Date('2018-09-14 12:00'),
            new Date('2018-09-17 12:00'),
            new Date('2018-09-18 12:00'),
            new Date('2018-09-19 12:00'),
            new Date('2018-09-20 12:00'),
            new Date('2018-09-21 12:00'),
            new Date('2018-10-09 12:00'),
            new Date('2018-10-10 12:00'),
            new Date('2018-11-11 12:00'),
            new Date('2018-10-12 12:00'),
            new Date('2018-10-15 12:00'),
            new Date('2018-10-16 12:00'),
            new Date('2018-10-17 12:00'),
        ]
    },{
        student_id: 101483,
        school_id: 3,
        first_name: 'Sam',
        last_name: 'Poli',
        scans: [
            new Date('2018-09-04 12:00'),
            new Date('2018-09-05 12:00'),
            new Date('2018-09-06 12:00'),
            new Date('2018-09-10 12:00'),
            new Date('2018-02-11 12:00'),
            new Date('2018-09-12 12:00'),
            new Date('2018-09-13 12:00'),
            new Date('2018-09-14 12:00'),
            new Date('2018-09-17 12:00'),
            new Date('2018-09-18 12:00'),
            new Date('2018-09-19 12:00'),
            new Date('2018-09-20 12:00'),
            new Date('2018-09-21 12:00'),
            new Date('2018-10-09 12:00'),
            new Date('2018-10-10 12:00'),
            new Date('2018-10-11 12:00'),
            new Date('2018-10-12 12:00'),
            new Date('2018-10-15 12:00'),
            new Date('2018-10-16 12:00'),
            new Date('2018-10-17 12:00'),
        ]
    },{
        student_id: 101789,
        school_id: 2,
        first_name: 'Sam',
        last_name: 'Poli',
        scans: [
            new Date('2018-09-04 12:00'),
            new Date('2018-09-05 12:00'),
            new Date('2018-09-06 12:00'),
            new Date('2018-09-10 12:00'),
            new Date('2018-09-11 12:00'),
            new Date('2018-09-12 12:00'),
            new Date('2018-09-13 12:00'),
            new Date('2018-09-14 12:00'),
            new Date('2018-09-17 12:00'),
            new Date('2018-09-18 12:00'),
            new Date('2018-03-19 12:00'),
            new Date('2018-09-20 12:00'),
            new Date('2018-09-21 12:00'),
            new Date('2018-10-09 12:00'),
            new Date('2018-10-10 12:00'),
            new Date('2018-10-11 12:00'),
            new Date('2018-10-12 12:00'),
            new Date('2018-10-15 12:00'),
            new Date('2018-10-16 12:00'),
            new Date('2018-10-17 12:00'),
        ]
    },
    ]
    
    
const createLunchReportByDate = (inputDate) => {
    
    const lunchReport = {
        date: '',
        scansBySchool: {}
    }
    const newLunchReport = Object.create(lunchReport)
    newLunchReport.date = inputDate
    lunch_data.forEach(student => {
        newLunchReport[student.school_id] = newLunchReport[student.school_id] || 0;
        student.scans.forEach(scan => {
            if (inputDate === scan.toISOString().substring(0, 10)) {
                newLunchReport[student.school_id] += 1
            }
        })
    })
    
    
    console.log(newLunchReport)
    
}
                                        
createLunchReportByDate('2018-09-04')
createLunchReportByDate('2018-09-19')