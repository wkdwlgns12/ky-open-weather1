export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return '#FCD34D'; // 맑음

    const group = Math.floor(weatherId / 100); // 날씨 그룹 (2xx, 3xx 등)

    switch (group) {
        case 2: // 번개
            return 'linear-gradient(135deg, #1c375dff 0%, #5953cdff 100%)';
        case 3: // 이슬비
            return 'linear-gradient(135deg, #CFFAFE 0%, #93C5FD 100%)';
        case 5: // 비
            return 'linear-gradient(135deg, #98b8ffff 0%, #60A5FA 100%)';
        case 6: // 눈
            return 'linear-gradient(135deg, #FFFFFF 0%, #fafee0ff 100%)';
        case 7: // 안개/먼지
            return 'linear-gradient(135deg, #CBD5E1 0%, #cce1fdff 100%)';
        case 8: // 구름
            return 'linear-gradient(135deg, #f5f9ffff 0%, #c3c3c3ff 100%)';
        default: // 예외
            return 'linear-gradient(135deg, #CBD5E1 0%, #64748B 100%)';
    }
}