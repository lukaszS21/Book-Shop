package com.example.biblioteka.services;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.SigningKeyRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;


import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
@Service
public class JsonWebToken {
    public String generateToken(Users user) {

        Key signingKey = new SecretKeySpec(SigningKeyRepository.getSigningKey().getBytes(StandardCharsets.UTF_8), SignatureAlgorithm.HS512.getJcaName());
        String name = user.getUserDetails().getUsername()+" "+user.getUserDetails().getSurname();

        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", "ROLE_ADMIN")
                .claim("name", name)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+60000))
                .signWith(SignatureAlgorithm.HS512, signingKey)
                .compact();
    }
}
