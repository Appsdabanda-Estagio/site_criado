<?php 
    require_once "includes/header.php";


/** 
 * O CÓDIGO ABAIXO TORNA AS PÁGINAS DINÁMICAS
 * O CÓDIGO ABAIXO TORNA AS PÁGINAS DINÁMICAS
 * O CÓDIGO ABAIXO TORNA AS PÁGINAS DINÁMICAS 
 * O CÓDIGO ABAIXO TORNA AS PÁGINAS DINÁMICAS
 * */
    if(isset($_GET["page"])) {
        switch($_GET["page"]){
            case "home" : 
                require_once "includes/home.php";
                break;
            case "category" :
                require_once "includes/category.php";
                break;
            case "archive" :
                require_once "includes/archive.php";
                break;
            case "pages" :
                require_once "includes/pages.php";
                break;
            case "contact" :
                require_once "includes/contact.php";
        } 
    } else {
        require_once "includes/home.php";
    }
    require_once "includes/footer.php"; 
?>

