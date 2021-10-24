import random

sports = ['Soccer', 'Basketball', 'Cricket', 'Dodgeball', 'Handball', 'Netball', 'Rugby', 'Softball', 'Tennis', 'Volleyball']
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
teams = ['Redcliff', 'Undurba', 'Deceoption Bay', 'Clontarf', 'Dakabin', 'Mango Hill', 'Bray Park', 'Pine Rivers']

games = []

for i in range(10000):
    game = sports[random.randint(0, len(sports)-1)] + ', ' + str(random.randint(0, 28)) + ' ' + months[random.randint(0, len(months)-1)] + ' ' + str(random.randint(2019, 2021)) + ', Grace Vs ' + teams[random.randint(0, len(teams)-1)]
    if(game not in games):
        games.append(game)
        print('Added game: ' + game)

with open('output.txt', 'w') as f:
    f.write(str(games))
print(games)
    