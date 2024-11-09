import 'package:flutter/material.dart';

class Board extends StatelessWidget {
  const Board({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('Assets/Poker Table.jpg'), 
            fit: BoxFit.cover, 
            alignment: Alignment.center, 
          ),
        ),
        // Additional widgets can be added here
      ),
    );
  }
}