package com.example.biblioteka.RabitMq;


import org.aspectj.bridge.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.Random;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/rabbit")
public class ClientMq{

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @GetMapping("/reciveMesage")
    public String get(){
        Random random = new Random();
        String queueName = "Queue1" + random.nextInt(10);
        Object message =rabbitTemplate.receiveAndConvert(queueName);
        if (message != null)
            return message.toString();
        else
            return "";

    }
    @RabbitListener(queues = "Queue1")
    public void RabbitListener(String s){
        System.out.println(s);
    }
}
