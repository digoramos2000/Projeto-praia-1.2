<?php

    $dbHost =  'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'formulário_Praia';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName );

    if ($conexao->connect_erro)
    {
        echo "Erro";
    }

    else
    {
        echo "Conexção efetuada com sucesso"
    }

?>