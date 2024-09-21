<?php

function sendTelegramMessage($chat_id, $message) {
    $token = 'YOUR_BOT_TOKEN'; // Ваш токен бота
    $url = "https://api.telegram.org/bot$token/sendMessage";

    $data = [
        'chat_id' => $chat_id,
        'text' => $message,
        'parse_mode' => 'HTML'
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE); // Получаем HTTP статус код
    $error = curl_error($ch); // Получаем ошибку, если она есть
    curl_close($ch);

    // Возвращаем ответ и статус
    return ['response' => $response, 'http_code' => $http_code, 'error' => $error];
}

// Получение данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Формирование сообщения для отправки
    $text = "Новое сообщение от пользователя:\nИмя: $name\nEmail: $email\nСообщение: $message";

    // Отправка сообщения в Telegram
    $chat_id = 'YOUR_CHAT_ID'; // Ваш Chat ID
    $result = sendTelegramMessage($chat_id, $text);

    // Проверяем успешность отправки и выводим отладочную информацию
    if ($result['http_code'] == 200) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения. Код ответа: " . $result['http_code'] . "<br>";
        echo "Ответ сервера: " . $result['response'] . "<br>";
        echo "Ошибка: " . $result['error'];
    }
}
?>
