# Exceptions Library

Esta biblioteca proporciona clases de excepciones personalizadas que se pueden usar en varios proyectos para manejar y generar errores específicos. Permite el manejo consistente de tipos de errores comunes, tales como `BadRequestException`, `BusinessException`, y `NotFoundException`.

## Installation

Para instalar esta biblioteca, puede incluirla en su proyecto vinculándola localmente o extrayéndola de su repositorio Git.

### Installing via GitHub

```bash
npm install git+https://github.com/jnrandres/exceptions-library.git
```

O por SSH:

```bash
npm install git+ssh://git@github.com:jnrandres/exceptions-library.git
```

## Available Exceptions

Las siguientes excepciones personalizadas están disponibles en esta biblioteca:

### `BadRequestException`

Lanzado cuando se hace una mala solicitud. Extiende el nativo JavaScript `Error` class e incluye un `statusCode` de 400 y por defecto `code` of `"BAD_REQUEST"`.

#### Example:

```typescript
import { BadRequestException } from 'exceptions-lib';

throw new BadRequestException('Invalid data provided.');
```

### `BusinessException`

Esta es una excepción de propósito más general para manejar errores de lógica de negocios. Puede personalizar el mensaje y el código de error para que se ajusten a su caso de uso.

#### Example:

```typescript
import { BusinessException } from 'exceptions-lib';

throw new BusinessException('Operation not allowed due to business rules.', 'BUSINESS_ERROR');
```

### `NotFoundException`

Lanzado cuando no se encuentra el recurso solicitado. Incluye un `statusCode` de 404 y por defecto `code` de `"NOT_FOUND"`.

#### Example:

```typescript
import { NotFoundException } from 'exceptions-lib';

throw new NotFoundException('User not found.');
```

## Usage

1. Importe la clase de excepción requerida desde la biblioteca.
2. Lance la excepción apropiada en la lógica de su aplicación cuando sea necesario.

#### Example:

```typescript
import { BadRequestException, NotFoundException } from 'exceptions-lib';

function getUser(userId: string) {
  if (!userId) {
    throw new BadRequestException('User ID is required.');
  }

  const user = database.findUserById(userId);
  if (!user) {
    throw new NotFoundException('User not found.');
  }

  return user;
}
```

## Building the Library

Si está trabajando en la biblioteca y desea compilarla:

```bash
npm run build
```
