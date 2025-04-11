type GradientBackground = string;

export const getFaqBackground = (id: number): GradientBackground => {
    // Массив с 11 красивыми градиентами
    const gradients = [
        '',
        '#212121',
        '#272727',
        '#2B2B2B',
        '#303030',
        '#353535',
        '#3A3A3A',
        '#3F3F3F',
        '#444444',
        '#494949',
        '#4E4E4E',
        '#535353',

    ];

    return gradients[id % gradients.length];
};