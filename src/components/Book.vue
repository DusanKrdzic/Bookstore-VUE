<template>
    <div id='book'>
        <div class='card'>
            <img class='card-img-top' :src="'/img/img'+book.id+'.jpg'">
            <div class='card-body'>
                <h4>{{book.name}}</h4>
                <h6>{{book.author}}</h6>
                <p>{{book.promotion}}</p>
            </div>
        </div>
    </div>
</template>

<style>
    img{
        width: 30%;
        height: 5%;
    }
</style>

<script>
    export default{
        name: 'Book',
        props: [
            'book'
        ]
    }
</script>