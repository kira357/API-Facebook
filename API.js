axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBALOZARSJXOHGs4oeO3XhgzEYxZBo3fPj8kx0TDHwUpltBKIvecKPkHK16MRytJrKTZBjuUZCf4EhVlRBv7sKM7UX3tB8157ogInMnXm4cD8RLc1WyN4UZAGcwkQpEqsVCskZByCGFDhiTWp03ePoOSngS9efHjFgZDZD')
    .then(response => {
        var output = "";
        output += " <u><b><span id='custom'>Bài viết số 1</span></b></u></br> <b>Nội dung bài viết: </b>" + response.data.data[0].message + "<br>" +
            "<u><b> <span id='custom'>Bài viết số 2</span></b></u></br> <b>Nội dung bài viết: </b>" + response.data.data[1].message + "<br>" +
            "<u><b> <span id='custom'>Bài viết số 3</span></b></u></br> <b>Nội dung bài viết: </b>" + response.data.data[2].message + "<br>" +
            "<u><b> <span id='custom'>Bài viết số 4</span></b></u></br> <b>Nội dung bài viết: </b>" + response.data.data[3].message;

        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error));
graph.facebook.com
graph.facebook.com
