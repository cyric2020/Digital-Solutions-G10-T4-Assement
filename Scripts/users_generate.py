import random
import csv
import hashlib

passwords = []

with open('1000-most-common-passwords.txt', 'r') as f:
    for line in f:
        passwords.append(line.strip())

first_names_male = ['James', 'Robert', 'John', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles']
first_names_female = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen']

last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis']

# with open('./users.csv', 'w', newline='') as f:
#     writer = csv.writer(f)

#     writer.writerow(['id', 'password', 'gender', 'name', 'age'])

#     for i in range(1, 100):
#         id = '0' + str(random.randint(11111, 99999))
#         password = passwords[random.randint(0, (len(passwords)-1))]
#         password = hashlib.sha256(password.encode('utf-8')).hexdigest()
#         gender = random.randint(0, 1)
#         first_name = first_names_male[random.randint(0, (len(first_names_male)-1))] if (gender == 0) else first_names_female[random.randint(0, (len(first_names_female)-1))]
#         last_name = last_names[random.randint(0, (len(last_names)-1))]
#         age = random.randint(13, 18)

#         writer.writerow([id, password, gender, first_name + ' ' + last_name, age])

users = []

for i in range(1000):
    id = '0' + str(random.randint(11111, 99999))
    gender = random.randint(0, 1)
    first_name = first_names_male[random.randint(0, (len(first_names_male)-1))] if (gender == 0) else first_names_female[random.randint(0, (len(first_names_female)-1))]
    last_name = last_names[random.randint(0, (len(last_names)-1))]

    user = f'{first_name} {last_name}, {id}'
    
    if(user not in users):
        users.append(user)
        print('Added game: ' + user)

with open('output.txt', 'w') as f:
    games_str = str(users)
    games_str = games_str.replace("'", '"')
    f.write(games_str)
print(users)