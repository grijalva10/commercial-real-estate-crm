from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in commercial_real_estate/__init__.py
from commercial_real_estate import __version__ as version

setup(
	name="commercial_real_estate",
	version=version,
	description="Commercial Real Estate App",
	author="JMG",
	author_email="grijalva10@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
