# Learnings

## Throwing Errors

To build a very simple test-method we could check whether a result is the result, we would expect (e.g. for a sum) and else throw an error with `throw new Error ("text")`.

## Abstracting the testing functions

We could extract an `expect()`-function that returns an object containing compare-functions like:

```javascript
{
    toBe(expected){
        if (actual !== expected){
            throw new Error (`${actual} not equal to ${expected}`)
        }
    }
}
```

## Modules with node

To handle different code-scopes respectively create modules with node the keyword `require` is necessary.

And in addition not `export` is feasible to use but the things that should be imported elsewhere should be set as attribues on the `global`-object.
