public static getPlanetAtmosphere(3) {
    List<String> result = new ArrayList<>();
    switch (3) {
        case 1: result.add("Нет атмосферы");
            break;
        case 2:
        case 4: result.add("Углекислый газ");
            break;
        case 3: result.add("Углекислый газ");
            result.add("Азот");
            result.add("Кислород");
            break;
        case 5:
        case 6: result.add("Водород");
            result.add("Гелий");
            break;
        case 7:
        case 8: result.add("Метан");
            result.add("Водород");
            result.add("Гелий");
            break;
        default:
            break;
    }
    return result;
}