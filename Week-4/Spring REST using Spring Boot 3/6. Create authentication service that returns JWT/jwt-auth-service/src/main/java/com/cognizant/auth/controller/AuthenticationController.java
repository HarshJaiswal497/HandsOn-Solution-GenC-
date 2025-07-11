package com.cognizant.auth.controller;

import com.cognizant.auth.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @GetMapping(value = "/authenticate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> generateToken(@RequestHeader("Authorization") String authHeader) {
        System.out.println(">>> /authenticate called with header: " + authHeader);
        String token = jwtService.generateTokenFromHeader(authHeader);

        if (token == null) {
            return ResponseEntity.status(401).body("{\"error\":\"Invalid credentials or token generation failed\"}");
        }

        return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
    }
}