package com.example.biblioteka.RabitMq;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rabbit")
public class ClientMq {

    private final RabbitTemplate rabbitTemplate;

    public ClientMq(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @GetMapping({"/reciveMesage", "/receiveMessage"})
    public String receiveMessage() {
        Object message = rabbitTemplate.receiveAndConvert(RabbitConfig.QUEUE_NAME);
        return message != null ? message.toString() : "";
    }
}