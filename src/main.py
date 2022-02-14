def getTotalX(a, b):
  numbers = 0
  for i in range(a[0], b[len(b) - 1]):
    number = i
    for j in range(0, (len(a) + len(b))):
      aElement = a[j]
      bElement = b[j]
      if number % aElement == 0 and number % bElement == 0:
        numbers += 1

def main():
  getTotalX()