package org.global.ecp.hackathon.app.user;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.global.ecp.hackathon.app.user.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(final UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody final User user) {

        return ResponseEntity.status(HttpStatus.CREATED).body(Optional.of(userService.createUser(user)).get());
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {

        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable final String id) {

        UUID userUUID = UUID.fromString(id);
        return ResponseEntity.ok(userService.getUserById(userUUID));
    }

    @PutMapping()
    public ResponseEntity<User> replaceUserId(@RequestBody final User newUser) {

        return ResponseEntity.ok(userService.replaceUserById(newUser));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserId(@PathVariable final String id) {

        UUID userUUID = UUID.fromString(id);
        userService.deleteUserById(userUUID);
        return ResponseEntity.noContent().build();
    }
}
