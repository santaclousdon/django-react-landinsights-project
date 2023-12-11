# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.10-slim

EXPOSE 8000 3000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt install -y libpq-dev npm curl

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

RUN curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

# run npm install inside of /workspaces/LandInsights/react_app

# RUN cd /workspaces/LandInsights/react_app && npm install

WORKDIR /app
COPY . /app

# # Creates a non-root user with an explicit UID and adds permission to access the /app folder
# # For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
# RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER root

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "home.wsgi"]