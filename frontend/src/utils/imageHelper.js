export const getItemImage = (item) => {
    if (!item) return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop';
    
    const imgUrl = item.image || item.img || item.imageUrl || '';
    if (imgUrl && (imgUrl.startsWith('http://') || imgUrl.startsWith('https://') || imgUrl.startsWith('/') || imgUrl.startsWith('data:image'))) {
        return imgUrl;
    }
    
    const testString = `${imgUrl} ${item.name || ''} ${item.category || ''}`.toLowerCase();
    
    if (testString.includes('pizza')) return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('burger') || testString.includes('burgur')) return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('dosa') || testString.includes('dhosa') || testString.includes('dhos')) return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('biryani')) return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('paneer')) return 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('chicken')) return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('noodle') || testString.includes('pasta')) return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('salad')) return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('dessert') || testString.includes('cake') || testString.includes('sweet')) return 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('drink') || testString.includes('beverage') || testString.includes('soda') || testString.includes('juice') || testString.includes('coffee') || testString.includes('tea')) return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    if (testString.includes('starter') || testString.includes('fries') || testString.includes('bread') || testString.includes('snack')) return 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop';
};
