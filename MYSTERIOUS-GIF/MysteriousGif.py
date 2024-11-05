
from PIL import Image
import numpy as np


def round_color(value):
    """Arrondir les valeurs de couleur à 0 ou 255."""
    if value < 128:
        return 0
    else:
        return 255

def color_to_bits(r, g, b, a):
    """Convertir les couleurs RGB (arrondies) en 3 bits."""
    if a == 0:  # Ignorer les pixels transparents
        return None

    r = round_color(r)
    g = round_color(g)
    b = round_color(b)
    return f"{r >> 7}{g >> 7}{b >> 7}"

def pixel_to_binary(pixel):
    if isinstance(pixel, int):
        # Handle grayscale or indexed modes
        pixel = (pixel, pixel, pixel, 255)  # Treat as white
    r, g, b, a = pixel
    if a == 0:  # Ignorer les pixels transparents
        return None

    r = round_color(r)
    g = round_color(g)
    b = round_color(b)
    return f"{r >> 7}{g >> 7}{b >> 7}"

def bits_to_ascii(bits):
    """Convertir une chaîne de bits en une chaîne ASCII, en ignorant les espaces."""
    message = ''
    
    # Filtrer la chaîne pour ne garder que '0' et '1'
    bits = ''.join(bit for bit in bits if bit in '01')
    #print(bits)
    # Vérifier que la chaîne ne soit pas vide
    if len(bits) == 0:
        raise ValueError("La chaîne ne contient pas de bits valides.")

    # Parcourir la chaîne par groupes de 8 caractères
    for i in range(0, len(bits), 8):
        byte = bits[i:i + 8]
        if len(byte) < 8:
            break  # Ignore les bits restants si moins de 8

        # Convertir le groupe de bits en caractère ASCII
        char = chr(int(byte, 2))
        message += char

    return message

def extract_hidden_message(gif, square_size=50):
    binary_message = ''

    width, height = gif.size
            # Parcourir les carrés
    n_carre = 13
    square_size = width // n_carre  # 50 pixels
    for y in range(13):
        for x in range(13):
            left = x * square_size
            upper = y * square_size
            right = left + square_size
            lower = upper + square_size
        # Crop the square from the image
            square = gif.crop((left, upper, right, lower))
        
        # Get the average color of the square in RGBA format
            color = square.resize((1, 1)).getpixel((0, 0))
            #print(color)
            bits = pixel_to_binary(color)
            #print(bits)
            if bits is not None:
                   binary_message += bits  
                #  print (binary_message)

   #Convertir la liste de bits en message ASCII
   # print('binarymessage :', binary_message)
    hidden_message = bits_to_ascii(binary_message)

    return hidden_message

# Exemple d'utilisation
gif_path = "input.gif"
gif = Image.open(gif_path)
# Extraire et sauvegarder chaque frame
frames = []
try:
    while True:
        frame = gif.copy()
        frames.append(frame)
        gif.convert('RGBA')
        gif.seek(gif.tell() + 1)
except EOFError:
    pass  # Toutes les frames sont extraites

# Afficher le nombre de frames extraites
print(f"Nombre de frames extraites : {len(frames)}")

# Analyser chaque frame (à compléter en fonction de la méthode de codage des messages cachés)
for i, frame in enumerate(frames):
    frame_data = np.array(frame)
    hidden_message = extract_hidden_message(frame,50)
    print("Message caché :", hidden_message)

msg = bits_to_ascii('01110010011110010110110101100001')
print(msg)
