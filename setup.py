from setuptools import setup, find_packages
import os

setup(
  name='subscribeme',
  version='0',
  author="Jackie Murphy",
  author_email="jackie.murphy@gmail.com",
  description="Subscribe to Twitter Atom feed",
  packages=find_packages(),
  package_dir={'': os.sep.join(['src'])},
  include_package_data=True,
  install_requires=[
      "python-twitter",
      "oauth2",
  ],
)
