//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function digitNAME(n){

switch (n) {
  case 0:
    return( 'ZERO' );
    break;
  case 1:
    return( 'ONE' );
    break;
  case 2:
    return( 'TWO' );
    break;
  case 3:
    return( 'THREE' );
    break;
  case 4:
    return( 'FOUR' );
    break;
  case 5:
    return( 'FIVE' );
    break;
  case 6:
    return( 'SIX' );
    break;
  case 7:
    return( 'SEVEN' );
    break;
  case 8:
    return( 'EITH' );
    break;
  case 9:
    return( 'NINE' );
    break;
  default:
    return( 'ERROR' );
}
}

module.exports = digitNAME;