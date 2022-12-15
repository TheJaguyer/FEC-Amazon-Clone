DROP TABLE IF EXISTS amazon_qa CASCADE;

CREATE TABLE amazon_qa (
id SERIAL PRIMARY KEY,
question TEXT NOT NULL,
answer TEXT NOT NULL,
product_id INTEGER,
date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
rating INTEGER CHECK (rating >= 0 AND rating <= 5)
);

INSERT INTO amazon_qa (question, answer, product_id, date_posted, rating) VALUES
('Can the Xbox controller control my cats mind?', 'Absolutely! The Xbox controller has advanced mind control technology that 
can make your cat do your bidding. Just make sure to press the correct buttons in the correct order, and your feline friend 
will be at your beck and call.', 1 , CURRENT_TIMESTAMP, 5),
('Is this product compatible with bluetooth capabilities?', 'Yes, it is compatible with bluetooth capabilities.', 1, CURRENT_TIMESTAMP, 2),
('Is this product made from organic materials?', 'No, it is not made from organic materials.', 1, CURRENT_TIMESTAMP, 1),
('Will this product make me happy?', 'Yes, it comes included with two joysticks', 1, CURRENT_TIMESTAMP, 5),
('Is the Xbox controller capable of solving world peace?', 'Absolutely! With its state-of-the-art button-pressing technology, 
the Xbox controller is sure to bring harmony to even the most tumultuous of international relations. Just make sure to press 
the correct buttons in the correct order, and world peace is guaranteed.', 1, CURRENT_TIMESTAMP, 5),
('What is the weight of this product?', 'The weight is 2 lbs, its a thicc boy.', 1, CURRENT_TIMESTAMP, 3);








