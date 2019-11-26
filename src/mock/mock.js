import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.woaini.com/getList', {
    data: data.list
});
Mock.mock('http://www.woaini.com/getUser', {
    'name|2': 'yu',
    'age|18-35': 20
});
Mock.mock('http://www.woaini.com/regexp', {
    'regexp': /[a-z][A-Z][0-9]/,
    'regexp': /\d{5, 10}/
});
Mock.mock('http://www.woaini.com/list', {
    'info|10-20': [
        {
            'index|+1': 1,
            'name': '@first @last',
            'id': '@integer(100, 1000)',
            'date': '@datetime',
            'img': '@image("200*200")',
            'text': '@sentence(6,10)'
        }
    ]
});

let Random = Mock.Random;
let habitData = function() {
    let habitList = []; //存放习惯信息的数组
    for (let i=0; i<20; i++) {
        let habit = {
            name: Random.ctitle(2,10),
            img: Random.dataImage('100x100'),
            owner: Random.cname()
        }
        habitList.push(habit);
    }
    return habitList;
}
Mock.mock('http://www.woaini.com/getHabit', {
    habitData
})