## Comandos basicos para utilização do git

- git init -> Inicia um repositorio
- git add * -> Stage todo o repositorio
- git add (localização do arquivo/repositorio) -> Stage do especifico arquivo ou repositorio
- git commit -m "(anotações aqui)" -> faz commit do que esta em stage

### Comandos para dar push no github

- git remote add origin (link do repositorio git) -> aponta a localização do repositorio remoto
- git push -u origin master -> faz o push do repositorio local para o github, no branch master

### Comandos adicionais do git

- git config --list -> Lista de configuração do git
- git config --global --unset user.(opção) -> Remover uma linha da configuração, substituir aonde está escrito "opção"
- git config --global user.(opção) -> Configura uma das opções, substituir aonde está escrito "opção"
- git remote -v -> Verifica a lista de repositorios remotos cadastrado
- git status -> Verifica a situação do git (se tem algo para dar add, commit, ou se a worktree está vazia)