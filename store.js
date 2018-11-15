var books =[];

$(document).ready(function(){
    $('#modalAdderOk').on('click' ,addBookToLibrary);
    $('#editOK').on('click' ,editBookAtLibrary);
    
});
                  
function addBookToLibrary(){
    var aa = $('#ModalAddBook form').serializeArray();
    var qq =[];
    for ( key in aa ){
        qq[aa[key]['name']] = aa[key]['value'];
    }
  
    books.push(qq);    
    drawBook(qq);

  //  $('#ModalAddBook').hide();
    
}

function editBookAtLibrary(){

//    $(this).attr('data' , )
    var aa = $('#editModal form').serializeArray();
    var current = this.getAttribute('data');
    var book = $('.edit[data='+current+']');
    var qqq = $('book').find("[data='" + current + "']"); 

    console.log(qqq);
    console.log(current);
    console.log(book);
    
    
    var qq =[];
    for ( key in aa ){
        qq[aa[key]['name']] = aa[key]['value'];
    }
    var forEdit = books[(this).getAttribute('data')]
    forEdit = qq;
    var id = (this).getAttribute('data');
    var aaaaaaaa = $(".edit[data="+id+"]");
    $('#editModal').modal('hide')

    
}

function drawBook(book){
    

    var bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.setAttribute('data' , books.indexOf(book));
    
    var name = document.createElement('h5');
    name.className = 'name';
    name.innerHTML = book['name'];
    
    var author = document.createElement('h5');
    author.className = 'author';
    author.innerHTML = book['author'];
    
    var year = document.createElement('h5');
    year.className = 'yaer';
    year.innerHTML = book['year'];
    
    var cover = document.createElement('div');
    cover.className = 'cover';
    cover.style.src=book['cover'];
    cover.style.backgroundImage = "url("+book['cover']+")";
    
    var editButton = document.createElement('button');
    editButton.className = "btn btn-warning edit";
    editButton.innerHTML= 'Edit';
    editButton.onclick = editBookFunc;
    editButton.setAttribute('data' , books.indexOf(book));
    editButton.setAttribute('data-toggle' , "modal");
    editButton.setAttribute('data-target' , "#editModal");
    
    var deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger";
    deleteButton.innerHTML= 'Delete';
    deleteButton.onclick = deleteBookFunc;
    deleteButton.setAttribute('data' , books.indexOf(book));
    
    
    
    bookDiv.appendChild(name);
    bookDiv.appendChild(cover);
    bookDiv.appendChild(author);
    bookDiv.appendChild(year);
    bookDiv.appendChild(editButton);
    bookDiv.appendChild(deleteButton);
    
    $('.book-panel').append(bookDiv);
    
    $('#ModalAddBook').modal('hide')
}

      
function editBookFunc(){

//    $('#ModalAddBook').modal('show');
    var temp = this.getAttribute('data');
    $('#editModal form #bookName').val(books[temp]['name']);
    $('#editModal form #bookAuthor').val(books[temp]['author']);
    $('#editModal form #bookYear').val(books[temp]['year']);
    $('#editModal form #bookCover').val(books[temp]['cover']);
    $('#editOK').attr('data' , temp);
        console.log("!!!");
    console.log(this);
    console.log("!!!");
}
    

function deleteBookFunc(){

    $(this).closest('.book').remove();
    books.splice(this.getAttribute('data'),1);    console.log(books);

}