# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']



# Pseudo code:
# create def method called returnMe that uses .include to return the letter found in each word of the array
# p each letter varibles to get the expected output, p returnMe(array, let('o')ter)

def returnMe (array, letter)
  filtered_words = array.select { |word| word.include?(letter) }
  return filtered_words
end
filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
p returnMe(beverages_array, filter_letter_o)


filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
p returnMe(beverages_array, filter_letter_t)



# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

 us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# use .flatten to convert the multiple arrays in a one dimensional array, thus removing all nested elements into a single array
# use .sort to sort the values in the array alphabetically

def sort_me_values hash
  values = hash.values.flatten
  sort_values = values.sort
  return sort_values
end

p sort_me_values(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
#create a class, use intialize and add the classes
#declare the model, wheels, and current speed
#creat a method that return a sentence of the class using string interpolation "#{}"

# class Bike 
#   attr_accessor :model, :wheels, :current_speed
#   def intialize(model)
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#   end

#   def bike_info
#     "My #{model} bike has #{wheels} and I'm going #{current_speed}"
#   end
# end
#   # my_bike = Bike.new('Cannondale')
#   p Bike.new('Cannondale')

class Bike
  def initialize(model, wheels = 2, current_speed = 0)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
  end

  def bike_info
    "My #{@model} bike has #{@wheels} wheels and I'm going #{@current_speed} mph."
  end

  my_bike = Bike.new("Cannondale")
  puts my_bike.bike_info
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
#create a method that increase the speed given pedal_faster(amount), current_speed += the value amount
#create a method that decreases the the speed given, brake -= value amount

def pedal_faster(value)
  @current_speed += value
  @current_speed = 0 if @current_speed < 0
  @current_speed
end

def brake(value)
  @current_speed -= value
  @current_speed = 0 if @current_speed < 0
  @current_speed
end
end

my_bike = Bike.new("Cannondale")
puts my_bike.bike_info

my_bike.pedal_faster(10)
puts my_bike.bike_info

my_bike.pedal_faster(18)
puts my_bike.bike_info

my_bike.brake(5)
puts my_bike.bike_info

my_bike.brake(25)
puts my_bike.bike_info

