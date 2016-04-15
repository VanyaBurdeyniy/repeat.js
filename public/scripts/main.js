var listObject = {
    name: 'Name 1',
    lastName: 'Last Name 1'
};

var listArray = [
    {
        name: 'Array Name 1',
        lastName: 'Array Last Name 1'
    },
    {
        name: 'Array Name 2',
        lastName: 'Array Last Name 2'
    }
];



$('#repeat').repeat(listObject);
$('#repeat2').repeat(listArray);


$('.re-init').click(function() {
    listObject.name = 'Custom Name';
    listObject.surName = 'New Surname';
    $('#repeat').repeat(listObject);
});