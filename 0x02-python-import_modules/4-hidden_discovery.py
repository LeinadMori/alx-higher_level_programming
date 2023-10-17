#!/usr/bin/python3

import dis3

def get_names_from_pyc(pyc_file):
    with open(pyc_file, 'rb') as f:
        code = f.read()

    co = compile(code, '<string>', 'exec')
    names = []
    for instruction in dis3.get_instructions(co):
        if instruction.opname == 'LOAD_GLOBAL' and not instruction.argval.startswith('__'):
            names.append(instruction.argval)

    return sorted(names)

if __name__ == '__main__':
    pyc_file = 'hidden_4.pyc'
    names = get_names_from_pyc(pyc_file)
    for name in names:
        print(name)
