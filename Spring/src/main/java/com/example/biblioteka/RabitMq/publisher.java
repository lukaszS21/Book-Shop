package com.example.biblioteka.RabitMq;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rabbit")
public class publisher {

    private final RabbitTemplate rabbitTemplate;

    public publisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @GetMapping("/message")
    public String sendMessage(@RequestParam String message) {
        rabbitTemplate.convertAndSend(RabbitConfig.QUEUE_NAME, message);
        return message;
    }
}