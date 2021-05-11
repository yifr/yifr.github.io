<?php
    $uid = _POST['user_id'];
    $fp = fopen('data/' + $uid + '.json', 'w');
    fwrite($fp, json_encode($_POST['data']));
    fclose($fp);
?>
