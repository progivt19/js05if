public static getPlanetAtmosphere(3) {
    List<String> result = new ArrayList<>();
    switch (3) {
        case 1: result.add("��� ���������");
            break;
        case 2:
        case 4: result.add("���������� ���");
            break;
        case 3: result.add("���������� ���");
            result.add("����");
            result.add("��������");
            break;
        case 5:
        case 6: result.add("�������");
            result.add("�����");
            break;
        case 7:
        case 8: result.add("�����");
            result.add("�������");
            result.add("�����");
            break;
        default:
            break;
    }
    return result;
}