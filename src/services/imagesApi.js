//* https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const fetchImagesWithQuery = (searchQuery, page = 1) => {
    // const baseUrl = 'https://pixabay.com/api/';
    // const key = 'key=17627900-033e401422c15b0db6e889732';
    // const type = 'image_type=photo';
    // const orientation = '&orientation=horizontal';
    // const per_page = 12;

  return fetch(
    //   `https://pixabay.com/api/?key=17627900-033e401422c15b0db6e889732&q=nature&image_type=photo&orientation=horizontal&per_page=12`
      `https://pixabay.com/api/?key=17627900-033e401422c15b0db6e889732&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    //   `${baseUrl}?${key}&q=${searchQuery}&page=${page}&${type}&${orientation}&per_page=${per_page}`
    )
    .then((res) => res.json())
    .then((data) => data.hits);
};

export default { fetchImagesWithQuery };
