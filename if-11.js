function WeekdayName(n){
	name = ''

	switch(n) {
		case 1:
			name = 'понедельник'
			break
		case 2:
			name = 'вторник'
			break
		case 3:
			name = 'среда'
			break
		case 4:
			name = 'четверг'
			break
		case 5:
			name = 'пятница'
			break
		case 6:
			name = 'суббота'
			break
		case 7:
			name = 'воскресенье'
			break
	}
	return name
}

console.log(WeekdayName(0))

module.exports = WeekdayName;