import os

def get_filenames(path):
    filenames = []
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            filenames.append(file)
            print(file)
    return filenames

# Example usage
path = '.'  # Replace '.' with the desired path
filenames = get_filenames(path)
print(filenames)
print(len(filenames))